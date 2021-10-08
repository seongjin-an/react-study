import React from "react";
import {EditorForm} from "../../organisms/write";
import {Responsive} from "../../organisms/common";
import {TagBox} from "../../organisms/write";

export const EditorTemplate = () => {
    return(
        <Responsive>
            <EditorForm/>
            <TagBox/>
        </Responsive>
    )
}