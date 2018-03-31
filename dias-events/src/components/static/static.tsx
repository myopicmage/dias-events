import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'components/common';
import { ScbwiForm } from './form';

class StaticInternal extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public handleSubmit = (values: any) => {
        console.log('values', values);
    }

    public render() {
        return (
            <Grid.PureG>
                <Grid.PureU1>
                    <a href="/" className="unstyled-link">
                        <h1>SCBWI June 2018</h1>
                    </a>
                </Grid.PureU1>
                <Grid.PureU1>
                    <Grid.PureU14>
                        <h3>Navigation</h3>
                        left menu
                    </Grid.PureU14>
                    <Grid.PureU34>
                        <h3>Register</h3>
                        <ScbwiForm onSubmit={this.handleSubmit} />
                    </Grid.PureU34>
                </Grid.PureU1>
            </Grid.PureG>
        );
    }
}

export const Static = connect((state: any) => ({ public: state.pubic }))(StaticInternal);
