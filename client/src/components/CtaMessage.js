import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { closeMessage } from "../features/message/messageSlice";

const CtaMessage = ({ content }) => {
  const dispatch = useDispatch();
  return (
    <div id='cta-message' className="p-absolute p-absolute-br b-white p-m">
      <div className="flex-row align-center space-between">
        <div className="flex-one mr-m">{ content }</ div>
        <div onClick={() => {dispatch(closeMessage())}}><FontAwesomeIcon icon={faClose} /></div>
      </div>
    </div>
  )
}

export default CtaMessage;