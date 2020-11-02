import RoomNamePage from "./RoomNamePage";
import RoomNameConfig from './RoomNameConfig';
import PageNameCheck from "../common/PageNameCheck";

const RoomNamePageCheck = PageNameCheck(
    RoomNamePage,
    RoomNameConfig
);

export default RoomNamePageCheck;