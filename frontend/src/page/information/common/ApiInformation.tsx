import Rest from "../../../api/Rest";
import {TypeClassRest} from "../../../api/IApi";

export type TypeApiInformation = TypeClassRest;

const ApiInformation = (apiPath: string) => {
    class Api extends Rest {
        protected url = () => {
            return apiPath;
        }
    }

    return Api;
};

export default ApiInformation;