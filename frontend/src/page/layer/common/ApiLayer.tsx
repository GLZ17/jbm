import Rest from "../../../api/Rest";
import {TypeClassRest} from "../../../api/IApi";

export type TypeApiLayer = TypeClassRest;

const ApiLayer = (apiPath: string) => {
    class Api extends Rest {
        protected url = () => {
            return apiPath;
        }
    }

    return Api;
};

export default ApiLayer;