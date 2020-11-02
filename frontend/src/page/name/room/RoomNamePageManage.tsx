import RoomNamePage from "./RoomNamePage";
import RoomNameForm from "./RoomNameForm";
import RoomNameApi from "./RoomNameApi";
import RoomNameConfig from "./RoomNameConfig";
import PageNameManage from "../common/PageNameManage";

const RoomNamePageManage = PageNameManage(
    RoomNamePage,
    RoomNameForm,
    RoomNameConfig,
    RoomNameApi
);

export default RoomNamePageManage;
