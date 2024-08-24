import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { YearList } from "./year/YearList";
import { YearCreate } from "./year/YearCreate";
import { YearEdit } from "./year/YearEdit";
import { YearShow } from "./year/YearShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { MakeList } from "./make/MakeList";
import { MakeCreate } from "./make/MakeCreate";
import { MakeEdit } from "./make/MakeEdit";
import { MakeShow } from "./make/MakeShow";
import { EngineList } from "./engine/EngineList";
import { EngineCreate } from "./engine/EngineCreate";
import { EngineEdit } from "./engine/EngineEdit";
import { EngineShow } from "./engine/EngineShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VehicleDatabase"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Year"
          list={YearList}
          edit={YearEdit}
          create={YearCreate}
          show={YearShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="Make"
          list={MakeList}
          edit={MakeEdit}
          create={MakeCreate}
          show={MakeShow}
        />
        <Resource
          name="Engine"
          list={EngineList}
          edit={EngineEdit}
          create={EngineCreate}
          show={EngineShow}
        />
      </Admin>
    </div>
  );
};

export default App;
