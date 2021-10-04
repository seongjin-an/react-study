import React, {useEffect, useMemo, useRef, useState} from "react";
import styled from "styled-components";
import {Responsive} from "../common";
import {EditorInput} from "../../atoms/input";
import {QuillWrapper} from "../../molecules/write";
import Quill from 'quill'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {AxiosError} from "axios";

export const EditorForm = () => {
    const QuillRef = useRef<ReactQuill>();
    const [contents, setContents] = useState("");
    const imageHandler = () => {
        // 파일을 업로드 하기 위한 input 태그 생성
        const input = document.createElement("input");
        const formData = new FormData();
        let url = "";
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        // 파일이 input 태그에 담기면 실행 될 함수
        input.onchange = async () => {
            const file = input.files;
            if (file !== null) {
                formData.append("image", file[0]);

                // 저의 경우 파일 이미지를 서버에 저장했기 때문에
                // 백엔드 개발자분과 통신을 통해 이미지를 저장하고 불러왔습니다.
                try {
                    const res = {
                        data: {
                            url: 'http://localhost:3000'
                        }
                    }
                        // 백엔드 개발자 분이 통신 성공시에 보내주는 이미지 url을 변수에 담는다.
                        url = res.data.url;
                    // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
                    // 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
                    const range = QuillRef.current?.getEditor().getSelection()?.index;
                    if (range !== null && range !== undefined) {
                        let quill = QuillRef.current?.getEditor();

                        quill?.setSelection(range, 1);

                        quill?.clipboard.dangerouslyPasteHTML(
                            range,
                            `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
                        );
                    }

                    return { ...res, success: true };
                } catch (error) {
                    const err = error as AxiosError;
                    return { ...err.response, success: false };
                }
            }
        };
    };
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    ["image", "video"],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
        }),
        []
    );

    const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',
    ]
    return(
        <StyledEditorBlock>
            <EditorInput placeholder="제목을 입력하세요"/>
            <QuillWrapper>
                <ReactQuill
                    ref={(element) => {
                        if (element !== null) {
                            QuillRef.current = element;
                        }
                    }}
                    value={contents}
                    onChange={setContents}
                    modules={modules}
                    theme="snow"
                    placeholder="내용을 입력해주세요."
                />
            </QuillWrapper>
        </StyledEditorBlock>
    )
}
const StyledEditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`