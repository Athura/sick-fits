import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
    // this is a special next.js lifecycle method that will run before the first render occurs
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        // This will look over every page that is loaded and call queries and mutations for us
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        };
        // This exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, apollo, pageProps } = this.props;

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(MyApp);