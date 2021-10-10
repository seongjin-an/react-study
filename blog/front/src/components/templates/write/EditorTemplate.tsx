import React from "react";
import {EditorForm} from "../../organisms/write";
import {Responsive} from "../../organisms/common";
import {TagBox} from "../../organisms/write";
import WriteActionButtons from "../../atoms/common/WriteActionButton";


export const EditorTemplate = () => {
    return(
        <Responsive>
            <EditorForm/>
            <TagBox/>
            <WriteActionButtons/>
        </Responsive>
    )
}