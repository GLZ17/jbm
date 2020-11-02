import RoomNameApi from "./RoomNameApi";
import RoomNameConfig from './RoomNameConfig';
import PageName from "../common/PageName";

const RoomNamePage = PageName(
    RoomNameConfig,
    RoomNameApi
);

export default RoomNamePage;