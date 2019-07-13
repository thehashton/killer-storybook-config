import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import "../InstallationSuccess.scss";
import { InstallationSucess } from "../InstallationSucess";

const stories = storiesOf("InstallationSucess", module);
stories.addDecorator(withKnobs);

stories.add("InstallationSucess", () => {
    return (
        <InstallationSucess />
    );
});