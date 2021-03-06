import Rest from "../../../api/Rest";
import {TypeClassRest} from "../../../api/IApi";

export type TypeApiName = TypeClassRest;

const ApiName = (apiPath: string) => {
    class Api extends Rest {
        protected url = () => {
            return apiPath;
        }
    }

    return Api;
};

export default ApiName;