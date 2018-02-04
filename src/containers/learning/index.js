import React, { Component } from 'react';
import TintedHeader from '../../components/misc/TintedHeader';
import LearningTopic from '../../components/learning/topic';
import '../../styles/_learning.scss';

export class LearningPage extends Component {
    render() {
        return (
            <main className="learning">
                <TintedHeader id="hero" title="Learning and Resources" subtitle="Find information about the technologies and skills you need to succeed in your career!" />
                <section id="topics">
                    <div className="container inner-top inner-bottom-sm">
                        <p>We curated an useful list of articles, interactive classes and tutorials to help you. If
                        you have suggestions or want to see content about a particular subject, send us an email
                        to woof@codecorgi.co or comment <a href="https://github.com/corgicode/frontend-react/issues/60">
                        at this issue on our github</a>.
                        </p>
                        <LearningTopic title="Text Editors"
                            description="Text editors are one of the mail tools in the programming arsenal, they work very much like a regular text editor but have additional functionality that make your life easier, like user-programmable syntax highlighting, code navigation, keyboard macros, extensions, integrations with source control and much more! We love using VSCode, and recommend it, but the most important thing when you're chosing an editor is that you use the one you feel the most comfortable with and don't let the tools or discussions slow you down or distract you from actually writing code."
                            iconClass="icon-clipboard icn lg"
                            links={[
                                { type: 'Download', name: 'Visual Studio Code by Microsoft', author: 'Microsoft', href: 'https://code.visualstudio.com/' },
                                { type: 'Article', name: 'Getting started with VSCode', author: 'Microsoft', href: 'https://code.visualstudio.com/docs' },
                                { type: 'Article', name: 'Why VSCode', author: 'Microsoft', href: 'https://code.visualstudio.com/docs/editor/whyvscode' },
                                { type: 'Download', name: 'Sublime Studio', author: 'HQ Pty', href: 'https://www.sublimetext.com/' },
                                { type: 'Guide', name: 'Getting started with Vim', author: 'Scotch.io', href: 'https://scotch.io/tutorials/getting-started-with-vim-an-interactive-guide' },
                            ]}
                        />
                        <LearningTopic title="Git Basics"
                            description="Git allows groups of people to work on the same documents (often code) at the same time, and without stepping on each other's toes. It's a distributed version control system."
                            iconClass="icon-lamp icn lg"
                            links={[
                                { type: 'Article', name: 'What is Git?', author: 'Atlassian', href: 'https://www.atlassian.com/git/tutorials/what-is-git' },
                                { type: 'Interactive', name: 'Learn Git in 15 minutes', author: 'Github', href: 'https://try.github.io/levels/1/challenges/1' },
                                { type: 'Guide', name: 'Install Git', author: 'Github', href: 'https://www.atlassian.com/git/tutorials/install-git' },
                            ]}
                        />
                        <LearningTopic title="Github Basics"
                            description="GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as wikis and basic task management tools for every project. Github is like facebook for programmers. Everyone’s on there. You can look at what they’re working on and easily peruse their code and make suggestions or changes."
                            iconClass="icon-flow-tree icn lg"
                            links={[
                                { type: 'Guide', name: 'Intro to Github', author: 'Github', href: 'https://guides.github.com/activities/hello-world' },
                                { type: 'Guide', name: 'Forking github repos', author: 'Github', href: 'https://guides.github.com/activities/forking' },
                            ]}
                        />
                        <LearningTopic title="Free Static Hosting"
                            description="Web hosting is a service that allows organizations and individuals to post a website or web page on to the Internet. There are a few options available to host your simple static website online for free."
                            iconClass="icon-globe-1 icn lg"
                            links={[
                                { type: 'Guide', name: 'Getting started with Github Pages', author: 'Github', href: 'https://guides.github.com/features/pages/' },
                                { type: 'Guide', name: 'Firebase Hosting', author: 'Firebase', href: 'https://firebase.google.com/docs/hosting' },
                                { type: 'Guide', name: 'Getting started with GitLab pages', author: 'GitLab', href: 'https://about.gitlab.com/2016/04/07/gitlab-pages-setup' },
                            ]}
                        />
                        <LearningTopic title="React / Redux"
                            description="Lots of links and information to get started with React and the most popular packages, and advance into more advance topics. Get familiar with React before starting on Redux."
                            iconClass="icon-battery icn lg"
                            links={[
                                { type: 'Article', name: 'Thinking in React (intro)', author: 'React Team', href: 'https://reactjs.org/docs/thinking-in-react.html' },
                                { type: 'Article', name: 'ReactJS intro (repo)', author: '@ustun', authorHref: 'https://github.com/ustun/', href: 'https://github.com/ustun/reactjs-introduction' },
                                { type: 'Guide', name: 'Getting Started with React / Try React', author: 'React Team', href: 'https://reactjs.org/docs/try-react.html' },
                                { type: 'Repo', name: 'React Starter Kit', author: '@kriasoft', authorHref: 'https://github.com/kriasoft', href: 'https://github.com/kriasoft/react-starter-kit' },
                                { type: 'Repo', name: 'React Express Template', author: '@khaled', authorHref: 'https://github.com/khaled/', href: 'https://github.com/khaled/react-express-template' },
                                { type: 'Guide', name: 'ES6 Interactive Guide', author: 'Formidable Labs', authorHref: 'http://formidable.com/', href: 'http://stack.formidable.com/es6-interactive-guide/#/' },
                                { type: 'Guide', name: 'ES6 Guide', author: 'Maciej Rzepiński', authorHref: 'https://twitter.com/mrzepinski', href: 'https://mrzepinski.gitbooks.io/es6-guide/content' },
                                { type: 'Article', name: '9 Things every React beginner should know', author: 'Cam Jackson', authorHref: 'https://twitter.com/thecamjackson', href: 'https://camjackson.net/post/9-things-every-reactjs-beginner-should-know' },
                                { type: 'Video', name: 'Getting Started with Redux', author: 'Dan Abramov', href: 'https://egghead.io/courses/getting-started-with-redux' },
                                { type: 'Article', name: 'Learning Observable By Building Observable', author: 'Ben Lesh', authorHref: 'https://twitter.com/BenLesh', href: 'https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87' },
                                { type: 'Compilation', name: 'Lots of React/Redux links', author: 'Mark Erikson', authorHref: 'https://github.com/markerikson/', href: 'https://github.com/markerikson/react-redux-links' },
                                { type: 'Article', name: 'Container / Component Pattern', author: 'Learn React', href: 'https://medium.com/@learnreact/container-components-c0e67432e005' },
                                { type: 'Guide', name: 'React / Redux intro', author: 'Redux Team', href: 'https://redux.js.org/docs/basics/UsageWithReact.html' },
                            ]}
                        />
                        <LearningTopic title="Career, engineering and programming advice"
                            description="Here are some links and information with career advice and how to be a better engineer."
                            iconClass="icon-chart-area icn lg"
                            links={[
                                { type: 'Compilation', name: 'Notes from the Effective Engineer', author: '@Rondy', authorHref: 'https://github.com/rondy', href: 'https://gist.github.com/dvidsilva/c8d6aacd64f2ab9397bd08137d58a962' },
                                { type: 'Blog', name: 'The Effective Engineer Blog', author: 'Edmond Lau', authorHref: 'https://twitter.com/edmondlau', href: 'http://www.effectiveengineer.com/blog' },
                            ]}
                        />
                    </div>
                </section>
            </main>
        );
    }
}

export default LearningPage;
