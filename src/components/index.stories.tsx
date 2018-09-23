import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { CheerCard, CheerInput, InfoSection, PeopleCard, SelectedPeopleCard, GalleryTopBar } from "../components";

// tslint:disable:object-literal-sort-keys
storiesOf("HY", module)
    .add("with CheerCard", () => <CheerCard title="Hello" createdAt={(new Date()).getTime()} type="top" />)
    .add("with CheerInput", () => <CheerInput value="hello" />)
    .add("with InfoSection", () => <InfoSection hideDivier={false} hideTitle={false} title="Hello" content={"loremlorem"} dividerWidth={10} />)
    .add("with PeopleCard", () => <PeopleCard isActive={true} {...{
        "name": "권솔이",
        "role": "UXUI",
        "profileImage": "https://via.placeholder.com/300x300"
    }} />)
    .add("with SelectedPeopleCard", () => <SelectedPeopleCard data={{
        "id": "P1",
        "name": "권솔이",
        "role": "UXUI",
        "subject": "우리가족 숙면을 위한 베개추천 서비스,헬로우필로우 ",
        "email": "kwonsol94@gmail.com",
        "url": "",
        "thought": "",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "https://via.placeholder.com/300x300"
    }} />)
    .add("with GalleryTopBar", () => <GalleryTopBar onMenuChange={action("indexChange")} menus={["Brand", "Package", "Illustration", "UXUI", "Editorial"]} currentMenuName={"Brand"} />);
