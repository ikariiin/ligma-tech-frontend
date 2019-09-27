import * as React from 'react';
import { render } from "react-dom";

render(
  <a href="https://www.bungie.net/en/oauth/authorize?client_id=29937&response_type=code&state=foobar">https://www.bungie.net/en/oauth/authorize?client_id=29937&response_type=code&state=foobar</a>,
  document.querySelector("#mount")
);