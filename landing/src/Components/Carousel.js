import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-grid-carousel'


const useStyles = makeStyles((theme) => ({

}));

export default function Hero() {
    const classes = useStyles();
    return (
        <div>
            <Carousel cols={3} rows={1} gap={5} loo>
                <Carousel.Item>
                    <img
                        width="100%"
                        alt="Pylotech"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Fpylontech.png?alt=media&token=b9c57570-e8b0-4942-ad89-d53f08ab2e0a"
                    />
                    <img
                        width="100%"
                        alt="Longi"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Flongi-logo%20copia.png?alt=media&token=be3d3633-841e-496b-a2af-56a30d9b6701"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        alt="Beny"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FZJ%20Beny.png?alt=media&token=6079ec17-83cb-461a-b20f-b09910451823"
                    />
                    <img
                        width="100%" alt="Unirac"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FUnirac.png?alt=media&token=ff3d1a0c-9989-4023-bbfd-6182a97e365f"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        alt="Seraphim"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FSeraphim.png?alt=media&token=0e1255f3-9c60-4d58-acc2-c7e921638510"
                    />
                                        <img
                        width="100%"
                        alt="Sungrow"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FSUNGROW-LOGO.png?alt=media&token=4e594d90-ae26-4203-b5ac-43ca36cd6f82"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        alt="SRNE"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FSRNE.png?alt=media&token=8e44b8d9-64f7-4aed-889a-85962cb45d18"
                    />
                    <img
                        width="100%"
                        alt="GO Solar"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogotipo-GOSOLAR-final_04.png?alt=media&token=d4d2b17b-2b36-41af-ae44-dc9fbe6ad73c"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        alt="Solis"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Solis.png?alt=media&token=143f90f3-d271-4ad7-a893-04134620d321"
                    />
                    <img
                        width="100%"
                        alt="Shurflo"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Shurflo.png?alt=media&token=c2ecf8a5-8277-4543-9bd8-6d5a18800d21"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        alt="QXPV"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20QXPV.png?alt=media&token=effec7f3-8fcf-48e4-885c-d84a2d2011a5"
                    />
                    <img
                        width="100%"
                        alt="Parts Master"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Parts%20Master.png?alt=media&token=6b9680ce-0efa-47c4-9e67-78bcc8176882"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        alt="Fronius"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Fronius-01.png?alt=media&token=dd19c8ee-1099-4955-9bd9-89c297ac823c"
                    />
                    <img
                        width="100%"
                        alt="ET Solar"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20ET.png?alt=media&token=594d8b32-4583-41be-bc21-d944ca167506"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        alt="Hoymiles"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FHoymiles-01.png?alt=media&token=a950c5de-4a09-4cd0-8657-bc8d425f707f"
                    />
                    <img
                        width="100%"
                        alt="Growatt"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FGrowatt-Logo.png?alt=media&token=0bb34900-556d-48f3-b949-030388057f32"
                    />
                    <img
                        width="100%"
                        alt="Enphase"
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FEmphase.png?alt=media&token=2c8892f4-c2db-43c5-a90f-5a33f4a9043b"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    );
}