import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeoutTimer } from "../app/config";
import { ctaMessageAutoClose, resetMessage } from "../features/message/messageSlice";

const CtaMessage = ({ content }) => {
  const ctaMessageAutoCloseObj = useSelector(ctaMessageAutoClose);
  const dispatch = useDispatch();
  const closeMessage = useCallback(() => {
    dispatch(resetMessage())
  }, [dispatch])
  setTimeout(() => {
    if(ctaMessageAutoCloseObj) {
      dispatch(resetMessage())
    }
  }, timeoutTimer)
  return (
    <div id='cta-message' className="p-absolute p-absolute-br b-white p-m">
      <div className="flex-row align-center space-between">
        <div className="flex-one mr-m">{ content }</ div>
        <div onClick={closeMessage}><FontAwesomeIcon icon={faClose} /></div>
      </div>
    </div>
  )
}

export default CtaMessage;