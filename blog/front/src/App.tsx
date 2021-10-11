import React from 'react';
import { Route } from 'react-router-dom'
import {PostListPage} from "./pages/postList";
import {LoginPage} from "./pages/login";
import {RegisterPage} from "./pages/register";
import {WritePage} from "./pages/write";
import {PostPage} from "./pages/post";
import {TempPage} from "./pages/temp";
import {TempPostsPage} from "./pages/temp/TempPostsPage";
import {Helmet} from "react-helmet-async";

const App = () => {
    return<>
        <Helmet>
            <title>REACTERS</title>
        </Helmet>
        <Route component={TempPage} path="/temp" />
        <Route component={TempPostsPage} path='/tempPosts'/>
        <Route component={PostListPage} path={['/@:username', '/']} exact />
        <Route component={LoginPage} path="/login"/>
        <Route component={RegisterPage} path="/register"/>
        <Route component={WritePage} path="/write"/>
        <Route component={PostPage} path="/@:username/:postId"/>
    </>
}

export default App;
