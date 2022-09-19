/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import Code from '../core/Code.js';
import Container from '../core/Container';
import GridBlock from '../core/GridBlock';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import * as React from 'react';

function LoadQueryLink() {
  return (
    <Link to="/docs/api-reference/load-query/">
      <code>loadQuery</code>
    </Link>
  );
}

function UsePreloadedQueryLink() {
  return (
    <Link to="/docs/api-reference/use-preloaded-query/">
      <code>usePreloadedQuery</code>
    </Link>
  );
}

function QueriesLink() {
  return <Link to="/docs/guided-tour/rendering/queries/">Queries</Link>;
}

function UseFragmentLink() {
  return (
    <Link to="/docs/api-reference/use-fragment/">
      <code>useFragment</code>
    </Link>
  );
}



const HomeSplash = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="logo">
            <img src={useBaseUrl('img/rdk-white.svg')} />
          </div>
          <div className="wrapper homeWrapper">
            <h2 className="projectTitle">
              {siteConfig.title}
              <small>{siteConfig.tagline}</small>
              <small>{siteConfig.subtagline}</small>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const {siteConfig} = useDocusaurusContext();
  const {withBaseUrl} = useBaseUrlUtils();
  const {isDarkTheme} = useThemeConfig();

  const showcase = siteConfig.customFields.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={withBaseUrl(user.image)} title={user.caption} />
          <div>
            <h6>{user.caption}</h6>
            <p>{user.description}</p>
          </div>
        </a>
      );
    });

  return (
    <div>
      <HomeSplash />
      <div className="homePage mainContainer">
        <Container className="textSection" background="light">
          <h2>Built for scale</h2>
          <p>
      Firebolt® is fast, reliable, open-source, and maintained by industry experts.  In addition, Firebolt® is lightweight and built to quickly make apps run on home devices such as connected TVs, streaming devices, etc. Using Firebolt® doesn't require users to have an agreement to leverage the platform.  All you need to do is sign-up and you can then use all the open source tooling provided, as well as leverage the community.

          </p>
          <GridBlock
            layout="threeColumn"
            contents={[
              {
                title: 'Keeps iteration quick',
                content: (
                  <span>
                    <p>
                    Firebolt® is an application platform designed to build apps on, specifically it's a set of guidelines and a family of APIs that lets app developers write once, and deploy to any Firebolt device.
                    </p>

                    <p>

                    </p>
                  </span>
                ),
              },
              {
                title: 'Adaptable',
                content: (
                  <span>
                    <p>
                      Firebolt® is open-source and designed to evolve with current and future smart TVs, phones, set-top boxes, and other devices. The open-source language is maintained and built by experts but can be taken, adapted, changed, or used in a way that matches your needs as a developer.
                    </p>
                    <p>

                    </p>
                  </span>
                ),
              },
              {
                title: 'Firebolt® is growing',
                content: (
                  <span>
                    <p>
                      Firebolt® is RPC based, and has an autogenerated javascript client.  Being RPC based gives users the flexibility to generate clients for any language .  Firebolt is constantly growing and adapting, stay-tuned for new features!
                    </p>
                    <p>

                    </p>
                  </span>
                ),
              },
            ]}
          />
        </Container>
{/*        <Container className="exampleSection" background="dark">
          <div className="wrapperInner">
            <div className="radiusRight">
              <h2>Getting started is easy</h2>
              <p>
                Just load Firebolt with your favorite package manager{' '}
                <LoadQueryLink />.
              </p>
              <p>
                Later, you can read the data from the store in a functional
                React component by calling the <UsePreloadedQueryLink /> hook.
              </p>
              <p>
                Relay encourages you to call <LoadQueryLink /> in response to an
                event, such as when a user presses on a link to navigate to a
                particular page or presses a button. See the guided tour section
                on <QueriesLink /> for more.
              </p>
            </div>

            <div className="radiusLeft">
              <pre className="outerPre">
                <Code>
                  {`
 import { Lifecycle } from '@firebolt-js/sdk'

Lifecycle.listen('foreground', value => {
  console.log(value)
})
`}
                </Code>
              </pre>
            </div>
          </div>
        </Container>
       // <Container className="exampleSection" background="light">
        //  <div className="wrapperInner">
         //   <div>
        //      <h2>Fragments</h2>
        //      <p>
         //       Step two is to render a tree of React components powered by
          //      Relay. Components use fragments to declare their data
          //      dependencies, and read data from the Relay store by calling{' '}
          //      <UseFragmentLink />.
         //     </p> 
          //    <p>
         //       A fragment is a snippet of GraphQL that is tied to a GraphQL
          //      type (like <code>Artist</code>) and which specifies <i>what</i>{' '}
          //      data to read from an item of that type.
          //    </p>
          //    <p>
           //     <UseFragmentLink /> takes two parameters: a fragment literal and
           //     a fragment reference. A fragment reference specifies{' '}
           //    <i>which</i> entity to read that data from.
           //   </p>
           //   <p>
           //     Fragments cannot be fetched by themselves; instead, they must
           //     ultimately be included in a parent query. The Relay compiler
            //    will then ensure that the data dependencies declared in such
            //    fragments are fetched as part of that parent query.
            //  </p>
          //  </div>
          //  <div>
           //   <pre className="outerPre">
          //      <Code>
          //        {`import React from "react";
// import { graphql, useFragment} from "react-relay";

// export default function ArtistCard(props) {
//  const {href, image, bio} = useFragment(
 //   graphql\`
 //     fragment ArtistHeader_artist on Artist {
 //       href
  //      bio
  //      image {
  //        url
  //      }
  //    }
 //   \`,
 //   props.artist
//  );
//  const imageUrl = image && image.url;

//  return (
 //   <Card>
 //     <Link href={href}>
  //      <Image imageUrl={imageUrl} />
  //      <Bio>{bio}</Bio>
  //    </Link>
 //   </Card>
 // );
// }
 //                   `}
   //             </Code>
     //         </pre>
       //     </div>
//          </div>
  //      </Container>
   //     <Container className="textSection graphqlSection" background="dark">
  //        <h2>GraphQL best practices baked in</h2>
  //        <p>
  //          Relay applies and relies on GraphQL best practices. To get the most
   //         from Relay's features, you'll want your GraphQL server to conform to
   //         these standard practices.
   //       </p>
   //       <GridBlock
   //         layout="threeColumn"
   //         contents={[
   //           {
   //             title: 'Fragments',
     //           content: (
    //              <div>
    //                <p>
   //                   A GraphQL{' '}
   //                   <a
   //                     href="google.com"
   //                     target="_blank">
   //                     Fragment
   //                   </a>{' '}
  //                    is a reusable selection of fields for a given GraphQL
  //                    type. It can be composed by including it in other
  //                    Fragments, or including it as part of GraphQL Queries.
  //                  </p>
   //                 <p>
   //                   Relay uses Fragments to declare data requirements for
  //                    components, and compose data requirements together.
  //                  </p>
  //                  <p>
  //                    See the <Link to="/docs/guided-tour/">guided tour</Link>
 //                   </p>
//                  </div>
//                ),
//              },
//              {
//                title: 'Connections',
 //               content: (
//                  <div>
 //                   <p>
 //                     GraphQL{' '}
 //                     <a
 //                       href="https://graphql.org/learn/pagination/#complete-connection-model"
 //                       target="_blank">
 //                       Connections
 //                     </a>{' '}
 //                     are a model for representing lists of data in GraphQL, so
 //                     that they can easily be paginated in any direction, as
 //                     well as to be able to encode rich relationship data.
 //                   </p>
//                    <p>
 //                     GraphQL Connections are considered a best practice for{' '}
//                      <a href="https://graphql.org/learn/pagination/">
 //                       Pagination in GraphQL
 //                     </a>
 //                     , and Relay provides first class support for these, as
//                      long as your GraphQL server supports them.
//                    </p>
  //                  <p>
 //                     See the{' '}
 //                     <Link to="docs/guides/graphql-server-specification#connections">
 //                       Connections
 //                     </Link>{' '}
 //                     docs
 //                   </p>
 //                 </div>
 //               ),
 //             },
//              {
//                title: 'Global Object Identification',
 //               content: (
//                  <div>
 //                   <p>
 //                     Relay relies on{' '}
 //                     <a
  //                      href="https://graphql.org/learn/global-object-identification/"
  //                      target="_blank">
  //                      Global Object Identification
  //                    </a>{' '}
 //                     to provide reliable caching and refetching, and to make it
//                      possible to automatically merge updates for objects.
//                    </p>
//                   <p>
 //                     Global Object Identification consists on providing
//                      globally unique ids across your entire schema for every
//                      type, built using the Node GraphQL interface.
//                    </p>
 //                   <p>
 //                    <Link to="docs/guides/graphql-server-specification#object-identification">
  //                      See the Object Identification docs
 //                     </Link>
 //                   </p>
 //                 </div>
 //               ),
 //             },
 //           ]}
//          />
//        </Container>
//        <Container
//          className="textSection declarativeSection"
//          background="light">
//          <h2>Flexible Mutations</h2>
//          <GridBlock
//            layout="threeColumn"
//            contents={[
 //             {
//                title: 'Describe data changing',
//                content: (
//                  <div>
//                    <p>
//                      Using GraphQL mutations, you can declaratively define and
 //                     request the data that will be affected by executing a
//                      mutation in a <em>single round trip</em>, and Relay will
//                      automatically merge and propagate those changes.
//                    </p>
//                  </div>
//                ),
//              },
//              {
//                title: 'Automatic updates',
//                content: (
//                  <div>
//                    <p>
//                      Using Global Object Identification, Relay is capable of
 //                     automatically merging mutation updates for any affected
//                      objects, and updating only the affected components.
//                    </p>
 //                   <p>
//                      For more complex cases where updates cannot automatically
//                      be merged, Relay provides apis to manually update the
//                      local Relay data in response to a mutation.
//                    </p>
//                  </div>
//                ),
//              },
//              {
//                title: 'Designed for great UX',
//                content: (
//                  <div>
//                    <p>
//                      Relay's mutation API supports making optimistic updates to
 //                     show immediate feedback to users, as well as error
 //                     handling and automatically reverting changes when
//                      mutations fail.
//                    </p>
//                  </div>
//                ),
//              },
//            ]}
//          />
//        </Container>
//        <Container className="textSection aheadSection" background="dark">
//          <h2>Ahead-of-time Safety</h2>
//          <GridBlock
//            layout="threeColumn"
//            contents={[
//              {
//                title: 'Peace of mind',
//                content: (
//                  <div>
//                    <p>
//                      While you work on a Relay project, the Relay compiler will
//                      guide you to ensure project-wide consistency and
//                      correctness against your GraphQL schema.
//                    </p>
//                  </div>
 //               ),
//              },
//              {
//                title: 'Optimized runtime',
//                content: (
//                  <div>
//                    <p>
//                      Relay pre-computes a lot of work (like processing and
//                      optimizing queries) ahead of time, during build time, in
 //                     order to make the runtime on the browser or device as
 //                     efficient as possible.
 //                   </p>
 //                 </div>
 //               ),
 //             },
  //            {
  //              title: 'Type safety',
 //               content: (
  //                <div>
 //                   <p>
//                      Relay generates Flow or TypeScript types for each of your
//                      React components that use Relay, which represent the data
//                      that each component receives, so you can make changes more
//                      quickly and safely while knowing that correctness is
//                      guaranteed.
//                    </p>
//                  </div>
//                ),
//              },
//            ]}
 //         />
//        </Container>
//        <Container className="textSection relaySection" background="light">
//          <h2>Can Firebolt Work For Me?</h2>
//          <GridBlock
//            layout="twoColumn"
//            contents={[
 //             {
//                title: 'Adopt Incrementally',
//                content: (
//                  <div>
 //                   <p>
 //                     If you already can render React components, you're most of
//                      the way there. Relay requires a Babel plugin, and to also
//                      run the Relay Compiler.
//                    </p>
//                    <p>
//                      You can use Relay out of the box with Create React App and
//                      Next.js.
//                    </p>
//                  </div>
//                ),
//              },
//              {
//                title: 'Make Complexity Explicit',
//                content: (
//                  <div>
//                    <p>
//                      Relay requires a bit more up-front setup and tools, in
//                      favour of supporting an architecture of isolated
//                      components which can scale with your team and app
//                      complexity.
//                    </p>
//                    <p>
//                      Learn these principles once, then spend more time working
//                      on business logic instead of pipelining data.
//                    </p>
//                  </div>
//                ),
//              },
//              {
//                title: 'Used at Scale',
//                content: (
//                  <div>
//                    <p>
//                      Relay is critical infrastructure in Facebook, there are
//                      tens of thousands of components using it. Relay was built
//                      in tandem with GraphQL and has full-time staff working to
//                      improve it.
//                    </p>
//                  </div>
//                ),
//              },
//              {
//                title: 'Not Just for Big Apps',
//                content: (
//                  <div>
//                    <p>
//                      If you're the sort of team that believes in using Flow or
//                      TypeScript to move error detection to dev-time, then Relay
//                      is likely a good fit for you.
//                    </p>
//                    <p>
//                      It's probable you'd otherwise re-create a lot of Relay's
//                      caching, and UI best practices independently.
//                    </p>
//                  </div>
//                ),
//              },
//            ]}
//          />
//      </Container>
*/}
        <Container className="textSection" background="light">
          <h2>Proudly Used Elsewhere</h2>


         <p>
            
            
          </p>
          <div>
           <div className="logosHomepage">{showcase}</div>
         </div>
          
        </Container>
      </div>
    </div>
  );
};
export default props => (
  <Layout>
    <Index {...props} />
  </Layout>
);
