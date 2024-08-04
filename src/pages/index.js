/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
import Layout from "@theme/Layout";

import NewSplashTop from "../components/front/NewSplashTop";
import WhatIsIt from "../components/front/WhatIsIt";

import Benefits from "../components/front/Benefits";
import Parts from "../components/front/Parts";
import Books from "../components/front/Books";
import GetInvolved from "../components/front/GetInvolved";
import Sections from "../components/front/Sections";



export default () => {
	return (<Layout>
		<NewSplashTop />
		<WhatIsIt />
		<Benefits />
		<Parts />
		<Sections />
		<Books />
		<GetInvolved />

	</Layout>)
}

