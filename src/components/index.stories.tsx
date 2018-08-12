import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { CheerCard, CheerInput, InfoSection, PeopleCard, SelectedPeopleCard, GalleryTopBar } from "../components";

storiesOf("HY", module)
    .add("with CheerCard", () => <CheerCard title="Hello" createdAt={(new Date()).getTime()} type="top" />)
    .add("with CheerInput", () => <CheerInput value="hello" />)
    .add("with InfoSection", () => <InfoSection hideDivier={false} hideTitle={false} title="Hello" content={"loremlorem"} dividerWidth={10} />)
    .add("with PeopleCard", () => <PeopleCard isActive={true} />)
    .add("with SelectedPeopleCard", () => <SelectedPeopleCard />)
    .add("with GalleryTopBar", () => <GalleryTopBar onIndexChange={action("indexChange")} menus={["Brand", "Package", "Illustration", "UXUI", "Editorial"]} currentIndex={0} />);
