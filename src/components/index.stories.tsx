import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { CheerCard, CheerInput, InfoSection } from "../components";

storiesOf("HY", module)
    .add("with CheerCard", () => <CheerCard />)
    .add("with CheerInput", () => <CheerInput />)
    .add("with InfoSection", () => <InfoSection hideDivier={false} hideTitle={false} dividerWidth={10} />);
