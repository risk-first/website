/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
import Layout from "@theme/Layout";

import NewSplashTop from "../components/front/NewSplashTop";
import StartHere from "../components/front/StartHere";
import Books from "../components/front/Books";
import AIForRiskFirst from "../components/front/AIForRiskFirst";
import Benefits from "../components/front/Benefits";
import PodcastSection from "../components/front/PodcastSection";
import FromTheCommunity from "../components/front/FromTheCommunity";
import AboutAuthor from "../components/front/AboutAuthor";
import Parts from "../components/front/Parts";
import PracticeRiskTable from "../components/front/PracticeRiskTable";
import Sections from "../components/front/Sections";

export default () => {
	return (<Layout>
		<NewSplashTop />
		<StartHere />
		<Benefits />
		<Books />
		<PodcastSection />
		<FromTheCommunity />
		<AboutAuthor />
		<Parts />
		<PracticeRiskTable />
		<AIForRiskFirst />
		<Sections />
	</Layout>)
}
