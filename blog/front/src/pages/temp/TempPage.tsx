import {AlertButton, Button} from "../../components/atoms/button";
import {ButtonVariant} from "../../components/atoms/button/Button";
import React from "react";
import {CommonButton} from "../../components/atoms/common/CommonButton";
import {Player} from "../../components/molecules/common/Player";

export const TempPage = () => {
    return<>
        <Player/>
        <Button variant={ButtonVariant.Primary} onClick={()=>console.log('hihihi')} style={{border:'1px solid pink'}}>기본</Button>
        <AlertButton>alert</AlertButton>
        <CommonButton style={{border: '10px solid pink', color: 'red'}}>버튼</CommonButton>
    </>
}
