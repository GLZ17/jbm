import ConfigRoute from "../../../route/ConfigRoute";
import RoomNameApi from "./RoomNameApi";
import RoomNameConfig from './RoomNameConfig';
import FormName from "../common/FormName";

const RoomNameForm = FormName(
    ConfigRoute.room_name.name,
    RoomNameConfig.config(),
    RoomNameApi
);

export default RoomNameForm;