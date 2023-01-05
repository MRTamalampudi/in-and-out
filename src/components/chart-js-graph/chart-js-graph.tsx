// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
        "id": "japan",
        "data": [
            {
                "x": "plane",
                "y": 231
            },
            {
                "x": "helicopter",
                "y": 293
            },
            {
                "x": "boat",
                "y": 41
            },
            {
                "x": "train",
                "y": 257
            },
            {
                "x": "subway",
                "y": 175
            },
            {
                "x": "bus",
                "y": 83
            },
            {
                "x": "car",
                "y": 101
            },
            {
                "x": "moto",
                "y": 47
            },
            {
                "x": "bicycle",
                "y": 108
            },
            {
                "x": "horse",
                "y": 21
            },
            {
                "x": "skateboard",
                "y": 107
            },
            {
                "x": "others",
                "y": 264
            }
        ]
    },
    {
        "id": "france",
        "data": [
            {
                "x": "plane",
                "y": 76
            },
            {
                "x": "helicopter",
                "y": 280
            },
            {
                "x": "boat",
                "y": 225
            },
            {
                "x": "train",
                "y": 255
            },
            {
                "x": "subway",
                "y": 252
            },
            {
                "x": "bus",
                "y": 32
            },
            {
                "x": "car",
                "y": 169
            },
            {
                "x": "moto",
                "y": 109
            },
            {
                "x": "bicycle",
                "y": 26
            },
            {
                "x": "horse",
                "y": 159
            },
            {
                "x": "skateboard",
                "y": 290
            },
            {
                "x": "others",
                "y": 189
            }
        ]
    },
    {
        "id": "us",
        "data": [
            {
                "x": "plane",
                "y": 255
            },
            {
                "x": "helicopter",
                "y": 217
            },
            {
                "x": "boat",
                "y": 223
            },
            {
                "x": "train",
                "y": 145
            },
            {
                "x": "subway",
                "y": 102
            },
            {
                "x": "bus",
                "y": 163
            },
            {
                "x": "car",
                "y": 151
            },
            {
                "x": "moto",
                "y": 62
            },
            {
                "x": "bicycle",
                "y": 283
            },
            {
                "x": "horse",
                "y": 95
            },
            {
                "x": "skateboard",
                "y": 55
            },
            {
                "x": "others",
                "y": 41
            }
        ]
    },
    {
        "id": "germany",
        "data": [
            {
                "x": "plane",
                "y": 41
            },
            {
                "x": "helicopter",
                "y": 74
            },
            {
                "x": "boat",
                "y": 270
            },
            {
                "x": "train",
                "y": 37
            },
            {
                "x": "subway",
                "y": 170
            },
            {
                "x": "bus",
                "y": 183
            },
            {
                "x": "car",
                "y": 117
            },
            {
                "x": "moto",
                "y": 34
            },
            {
                "x": "bicycle",
                "y": 28
            },
            {
                "x": "horse",
                "y": 82
            },
            {
                "x": "skateboard",
                "y": 209
            },
            {
                "x": "others",
                "y": 90
            }
        ]
    },
    {
        "id": "norway",
        "data": [
            {
                "x": "plane",
                "y": 5
            },
            {
                "x": "helicopter",
                "y": 205
            },
            {
                "x": "boat",
                "y": 91
            },
            {
                "x": "train",
                "y": 263
            },
            {
                "x": "subway",
                "y": 201
            },
            {
                "x": "bus",
                "y": 246
            },
            {
                "x": "car",
                "y": 234
            },
            {
                "x": "moto",
                "y": 155
            },
            {
                "x": "bicycle",
                "y": 7000
            },
            {
                "x": "horse",
                "y": 207
            },
            {
                "x": "skateboard",
                "y": 279
            },
            {
                "x": "others",
                "y": 225
            }
        ]
    }
]
const MyResponsiveLine = () => (
    <ResponsiveLine data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
                        reverse: false
                    }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={5}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={1}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    />
)

export default MyResponsiveLine
