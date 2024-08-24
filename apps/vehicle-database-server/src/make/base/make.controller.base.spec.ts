import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { MakeController } from "../make.controller";
import { MakeService } from "../make.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  active: "true",
  created_at: new Date(),
  id: "exampleId",
  make_name: "exampleMakeName",
  updated_at: new Date(),
};
const CREATE_RESULT = {
  active: "true",
  created_at: new Date(),
  id: "exampleId",
  make_name: "exampleMakeName",
  updated_at: new Date(),
};
const FIND_MANY_RESULT = [
  {
    active: "true",
    created_at: new Date(),
    id: "exampleId",
    make_name: "exampleMakeName",
    updated_at: new Date(),
  },
];
const FIND_ONE_RESULT = {
  active: "true",
  created_at: new Date(),
  id: "exampleId",
  make_name: "exampleMakeName",
  updated_at: new Date(),
};

const service = {
  createMake() {
    return CREATE_RESULT;
  },
  makes: () => FIND_MANY_RESULT,
  make: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Make", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MakeService,
          useValue: service,
        },
      ],
      controllers: [MakeController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /makes", async () => {
    await request(app.getHttpServer())
      .post("/makes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created_at: CREATE_RESULT.created_at.toISOString(),
        updated_at: CREATE_RESULT.updated_at.toISOString(),
      });
  });

  test("GET /makes", async () => {
    await request(app.getHttpServer())
      .get("/makes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          created_at: FIND_MANY_RESULT[0].created_at.toISOString(),
          updated_at: FIND_MANY_RESULT[0].updated_at.toISOString(),
        },
      ]);
  });

  test("GET /makes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/makes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /makes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/makes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        created_at: FIND_ONE_RESULT.created_at.toISOString(),
        updated_at: FIND_ONE_RESULT.updated_at.toISOString(),
      });
  });

  test("POST /makes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/makes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        created_at: CREATE_RESULT.created_at.toISOString(),
        updated_at: CREATE_RESULT.updated_at.toISOString(),
      })
      .then(function () {
        agent
          .post("/makes")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
