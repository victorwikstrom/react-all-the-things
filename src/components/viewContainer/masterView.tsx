import React, { CSSProperties } from 'react';
import ViewSection from './viewSection';
import ErrorBoundary from '../errorBoundary';
import ImageLink from './ImageLink';

interface Props {
    detailViews: string[]
}

/** React function component */
export default function MasterView(props: Props) {

    return (
        <div style={container}>
            {props.detailViews.map((view) => (
                <ViewSection key={view}>
                    <ImageLink view={view}/>
                </ViewSection>
            ))}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em'
}