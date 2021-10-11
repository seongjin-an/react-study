import React from "react";
import {AskModal} from "../common";
interface IAskRemoveModal{
    visible: boolean
    onConfirm: () => void
    onCancel: () => void
}
export const AskRemoveModal = ({ visible, onConfirm, onCancel }: IAskRemoveModal) => {
    return(
        <AskModal
            visible={visible}
            title="포스트 삭제"
            description="포스트를 정말 삭제하시겠습니까?"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={onConfirm}
            onCancel={onCancel}/>
    )
}
