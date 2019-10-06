import {Col, Progress, Row} from "rsuite";
import React from "react";

const {Line} = Progress;

export interface StatsBoxPros {
    stat: number;
    title: string;
}

export const StatsBox: React.FC<StatsBoxPros> = (props) => {
    const {stat, title} = props
    const maxSize = 180
    const percent = (stat * 100) / maxSize
    let color = '#ec7d77'
    if (percent > 25) color = "#ffc107"
    if (percent > 50) color = "#60937b"
    if (percent > 75) color = "#4dbaff"

    return (
        <Row>
            <Col md={3}>{title + ': '}</Col>
            <Col md={19}><Line percent={percent} strokeColor={color} showInfo={false}/> </Col>
            <Col md={2}>{stat}</Col>
        </Row>
    )
}

export default StatsBox