import * as React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { Content, Spinner } from 'native-base'
import { GameLoop } from 'react-native-game-engine'
import styles from '../styles/defaultStyle'
import { Gradient } from '../styles/radialgradients'
import { resource } from '../config/Resource'
import { Planet, Star, GetPlanetAsync } from '../service/getPlanets'
import { getSolarSystem } from '../service/getSolarSystem'
import {
    Circle,
    Ellipse,
    Path,
    Image,
    ClipPath,
    Text,
    G,
} from 'react-native-svg'
import { storeBase64 } from '../service/getPlanets'
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom'
import { getStarSize } from '../service/getSolarSystem'
interface SimulatorProps {
    navigation: any
}

interface SimulatorState {
    x: number
    y: number
    alpha: number
    star: Star
    loading: boolean
}
export default class Simulator extends React.Component<
    SimulatorProps,
    SimulatorState
> {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0,
            alpha: 0,
            star: undefined,
            loading: true,
        }
    }

    async componentDidMount() {
        const prop = this.props.navigation.state.params.star
            ? this.props.navigation.state.params
            : this.props.navigation.state.params.navigation

        const star = await getSolarSystem(
            prop.star ? prop.star : prop.state.params.planet.star,
        )

        let color = JSON.parse(await storeBase64())
        for (let planet of star.planets) {
            planet.type = planet.img.uri
            planet.img.uri = color[planet.img.uri]
        }

        star.radius = getStarSize(star)

        this.setState({ star, loading: false })
    }

    updateHandler = () => {
        this.setState({
            alpha: this.state.alpha + 1 / 50,
        })
    }

    RotateX = (cx: number, rx: number) => {
        return cx + rx * Math.cos(this.state.alpha + rx)
    }

    RotateY = (cy: number, ry: number) => {
        return cy + ry * Math.sin(this.state.alpha + ry / 0.3)
    }

    navigateToPlanet = async (planet: any) => {
        var planetinfo = await GetPlanetAsync(planet.name)

        this.props.navigation.replace('infopages', {
            planet: planetinfo,
            color: planet.img.uri,
        })
    }
    render() {
        const { star, loading } = this.state

        let { height } = Dimensions.get('window')

        let width = 600

        if (star != undefined) {
            const planets = star.planets.filter(p => p.starDistance != null)
            if (planets.length > 0) {
                width = planets[planets.length - 1].starDistance * 2
            }
            if (star.habZoneMax != null) {
                width =
                    (width > star.habZoneMax * 2
                        ? width
                        : star.habZoneMax * 2) +
                    planets[planets.length - 1].radius * 2
            }
        }

        height = height > width * 0.3 ? height : width * 0.3

        return (
            <ScrollView style={styles.d3View} horizontal={true}>
                <GameLoop onUpdate={this.updateHandler}>
                    <Content
                        style={[{ left: this.state.x, top: this.state.y }]}
                    >
                        {loading ? (
                            <Spinner color="#c6d4ff" />
                        ) : (
                            <SvgPanZoom
                                canvasHeight={height}
                                canvasWidth={width}
                                minScale={0.5}
                                initialZoom={1}
                                maxScale={2}
                            >
                                <SvgPanZoomElement x={0} y={0}>
                                    <Image
                                        href={require('../images/sky-night-stars.jpg')}
                                    >
                                        {' '}
                                    </Image>
                                    {Gradient(star)}

                                    <Path
                                        d={`M${width / 2 -
                                            star.radius},${height /
                                            2} a1,1 0 0,0 ${star.radius * 2},0`}
                                        fill={`url(#Star-${
                                            resource.color[star.color]
                                        })`}
                                    />
                                    {star.habZoneMax != null ? (
                                        <Ellipse
                                            cx={width / 2}
                                            cy={height / 2}
                                            rx={star.habZoneMax}
                                            ry={star.habZoneMax * 0.3}
                                            stroke="blue"
                                            strokeWidth="1"
                                            fillOpacity="0"
                                        />
                                    ) : (
                                        <React.Fragment />
                                    )}

                                    {star.habZoneMax != null ? (
                                        <Ellipse
                                            cx={width / 2}
                                            cy={height / 2}
                                            rx={star.habZoneMin}
                                            ry={star.habZoneMin * 0.3}
                                            stroke="red"
                                            strokeWidth="1"
                                            fillOpacity="0"
                                        />
                                    ) : (
                                        <React.Fragment />
                                    )}

                                    {star.planets.map((p, index) => {
                                        return (
                                            <G key={index}>
                                                <ClipPath
                                                    key={`path- ${index}`}
                                                    id={p.name}
                                                >
                                                    <Circle
                                                        cx={this.RotateX(
                                                            width / 2,
                                                            p.starDistance,
                                                        )}
                                                        cy={this.RotateY(
                                                            height / 2,
                                                            p.starDistance *
                                                                0.3,
                                                        )}
                                                        r={p.radius}
                                                    />
                                                </ClipPath>
                                                <Image
                                                    key={`image- ${index}`}
                                                    x={this.RotateX(
                                                        width / 2 -
                                                            2 * p.radius,
                                                        p.starDistance,
                                                    )}
                                                    y={this.RotateY(
                                                        height / 2 -
                                                            2 * p.radius,
                                                        p.starDistance * 0.3,
                                                    )}
                                                    width={300}
                                                    height={300}
                                                    href={p.img}
                                                    clipPath={`url(#${p.name})`}
                                                />

                                                <Circle
                                                    key={`circle-${index}`}
                                                    cx={this.RotateX(
                                                        width / 2,
                                                        p.starDistance,
                                                    )}
                                                    cy={this.RotateY(
                                                        height / 2,
                                                        p.starDistance * 0.3,
                                                    )}
                                                    r={p.radius}
                                                    onPressIn={() =>
                                                        this.navigateToPlanet(p)
                                                    }
                                                    fillOpacity={0.6}
                                                    fill={`url(#${p.type})`}
                                                />
                                                <Text
                                                    key={`text- ${index}`}
                                                    x={
                                                        p.radius +
                                                        this.RotateX(
                                                            width / 2,
                                                            p.starDistance,
                                                        )
                                                    }
                                                    y={
                                                        p.radius +
                                                        this.RotateY(
                                                            height / 2,
                                                            p.starDistance *
                                                                0.3,
                                                        )
                                                    }
                                                    textAnchor="end"
                                                    fontWeight="bold"
                                                    fontSize="16"
                                                    fill="white"
                                                >
                                                    {p.name}
                                                </Text>
                                            </G>
                                        )
                                    })}

                                    <Path
                                        d={`M${width / 2 +
                                            star.radius},${height /
                                            2} a1,1 0 0,0  ${star.radius *
                                            -2},0`}
                                        fill={`url(#Startop-${
                                            resource.color[star.color]
                                        })`}
                                    />
                                </SvgPanZoomElement>
                            </SvgPanZoom>
                        )}
                    </Content>
                </GameLoop>
            </ScrollView>
        )
    }
}
