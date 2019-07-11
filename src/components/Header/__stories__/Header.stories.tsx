import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import "../Header.scss";
import { Header } from "../Header";

const stories = storiesOf("Header", module);
stories.addDecorator(withKnobs);

stories.add("Header", () => {
    return (
        <Header />
    );
});