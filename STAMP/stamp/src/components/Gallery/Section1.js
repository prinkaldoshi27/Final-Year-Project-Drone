import React from 'react';
import {
    Heading,
    CardBody,
    Image,
    Divider,
    Text,
    Stack,
    Card,
} from '@chakra-ui/react';
import CIIA_Mihir from '../../assets/CIIA_Mihir.jpeg';
import CIIA_Prinkal from '../../assets/CIIA_Prinkal.jpg';
import Prakalp_Prinkal from '../../assets/Prakalp_Prinkal.jpg';
import Prakalp_Tanay from '../../assets/Prakalp_Tanay.jpg';
import Prakalp_Sarid from '../../assets/Prakalp_Sarid.png';
import DA_Sarid from '../../assets/DA_Sarid.png';
import DA_Prinkal from '../../assets/DA_Prinkal.jpg';
import SPIT_Prinkal from '../../assets/SPIT_Prinkal.jpg';
import SPIT_Mihir from '../../assets/SPIT_Mihir.jpg';
import SPIT_Arsh from '../../assets/SPIT_Arsh.jpg';
import SPIT_Tanay from '../../assets/SPIT_Tanay.jpg';
import SPIT from '../../assets/SPIT.jpg';
import DA_Mihir from '../../assets/DA_Mihir.jpg';
import DA_Arsh from '../../assets/DA_Arsh.jpg';
import Prakalp_Mihir from '../../assets/Prakalp_Mihir.jpeg';
import Prakalp from '../../assets/Prakalp.png';


const Gallery = () => {
    return (
        <>
            <Heading size="xl" textAlign="center" mt="20px">
                CIIA-2 INNOVATION EXHIBITION
            </Heading>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <Text margin="20px">
                        CiiA (Collective Initiative for Innovation at the Grassroot Level) launched an initiative to promote and showcase innovations among young individuals in schools, colleges, and various technology institutions. This included encouraging participation from incubation centers and start-ups.
                        <br /><br />
                        The objective was to discover and highlight the talent of young Indians up to 28 years old, including high school students, graduates, post-graduates, PhDs, professionals, and young entrepreneurs.
                        <br /><br />
                        CiiA acted as a nurturing ground, fostering future scientists, researchers, inventors, innovators, and other professionals. Additionally, CiiA provided opportunities for talented students to be adopted and channeled into appropriate positions within the rapidly evolving technology field. This strategic approach aimed to prepare the nation for the future and foster the development of a multi-trillion-dollar economy.
                        <br /><br />
                        In our participation in this event, we showcased our innovation called "DRONE." The drone was designed for surveillance purposes and featured autonomous flight capabilities.
                    </Text>
                </div>
                <img
                    src="https://www.ciia.co.in/images/exhibition-2023/51.jpg"
                    alt="Image"
                    style={{
                        width: '550px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 10px black',
                        margin: '10px',
                    }}
                /></div>


<div style={{ display: 'flex', flexWrap: 'nowrap', margin: '20px' }}>
  <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '50px', height: '100px' }}
                            objectFit='cover'
                            src={CIIA_Prinkal}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Prinkal Doshi</Heading>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={CIIA_Mihir}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Mihir Panchal</Heading>
                        </Stack>
                    </CardBody>
                </Card>

            </div>


            <Divider />
            <Heading size="xl" textAlign="center" mt="20px">
               PRAKALP '23
            </Heading>
            <div style={{ display: 'flex', alignItems: 'center' }}>
  <img
    src={Prakalp}
    alt="Image"
    style={{
      width: '250px',
      height: '400px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px black',
      marginLeft: '60px',
    }}
  />
  <div style={{ flex: 1 }}>
    <Text margin="20px">
                    In the undergraduate project event held on April 13th, 2023, we participated by showcasing the working model of our DRONE - STAMP.
<br/><br/>
STAMP stands for Surveillance, Tracking, and Advanced Monitoring Platform. We presented a comprehensive system that combines highly trained and experienced drone pilots and support staff to ensure safe and effective drone operations. Our personnel undergo regular training and development programs to stay updated with the latest technologies and techniques in the field.
<br/><br/>
The highlight of our project was the intuitive user interface (UI) of STAMP. We designed the UI to be user-friendly, allowing even individuals with limited drone experience to easily navigate and operate our drones. Users can access various features through the UI, such as arming and disarming the drone, setting up customized flight paths, and adjusting camera settings.
<br/><br/>
One of the key capabilities of STAMP is real-time tracking. We integrated advanced AI algorithms into our system, enabling real-time tracking of people and objects. This feature makes STAMP an ideal solution for law enforcement agencies and private investigators, enhancing their surveillance and monitoring capabilities.
<br/><br/>
STAMP utilizes cutting-edge drone technology to provide comprehensive surveillance, security, and tracking solutions to our clients. Our drones are equipped with high-quality cameras, advanced AI algorithms, and a range of tools and weapons. With our advanced drone technology, we aim to deliver efficient and effective solutions for various applications in the field of surveillance and security.</Text>
                </div>
               </div>

<div style={{ display: 'flex', flexWrap: 'nowrap', margin: '20px' }}>
  <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '50px', height: '100px' }}
                            objectFit='cover'
                            src={Prakalp_Prinkal}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Prinkal Doshi</Heading>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={Prakalp_Mihir}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Mihir Panchal</Heading>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={Prakalp_Sarid}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Sarid Qureshi</Heading>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={Prakalp_Tanay}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Tanay Desai</Heading>
                        </Stack>
                    </CardBody>
                </Card>

            </div>
            <Divider />
            <Heading size="xl" textAlign="center" mt="20px">
         DRONA AVIATION DEVELOPMENT WORKSHOP
            </Heading>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <Text margin="20px">
                    We successfully completed a 2-day workshop on drones conducted by Gaurav Singh and Amit Thool. <br/><br/>
                    The workshop covered the history of drones, drone specifications, applications, drone assembly, and wireless programming. <br/><br/>
                    We also had a hands-on flying session where we learned about drone controls and safety measures. <br/><br/>
                    It was an informative and valuable workshop that provided a comprehensive understanding of drones and their practical applications.    </Text> </div>
             
                <img
                    src={"https://www.dronaaviation.com/wp-content/uploads/2020/08/Big-Quad-compress-plutox.jpg"}
                    alt="Image"
                    style={{
                        width: '200px',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 10px black',
                        marginRight: '50px',
                    }}
                />
                
                </div>

<div style={{ display: 'flex', flexWrap: 'nowrap', margin: '20px' }}>
  <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '50px', height: '100px' }}
                            objectFit='cover'
                            src={DA_Prinkal}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Prinkal Doshi</Heading>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={DA_Arsh}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Arshkumar Sakaria</Heading>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={DA_Sarid}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Sarid Qureshi</Heading>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={DA_Mihir}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Mihir Panchal</Heading>
                        </Stack>
                    </CardBody>
                </Card>

            </div>
            <Divider />

            <Heading size="xl" textAlign="center" mt="20px">
                S.P.I.T - INNOVATION CUP-23
            </Heading>
            <div style={{ display: 'flex', alignItems: 'center' }}>
  <img
    src={SPIT}
    alt="Image"
    style={{
      width: '400px',
      height: '200px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px black',
      marginLeft: '60px',
    }}
  />
  <div style={{ flex: 1 }}>
    <Text margin="20px">
                    The SPIT Innovation Cup'23 is a competition sponsored by AICTE-SPICES. It consists of three rounds: Ideation, Assessment, and Final Product Design. 
                    <br/><br/>
                    Teams choose a domain, identify a problem statement, and submit an abstract in Round 1. In Round 2, selected teams work on a live problem statement and present a PPT on their idea. 
                    <br/><br/>The top 10 teams proceed to Round 3, where they receive financial assistance to build a prototype and showcase it for judging. The competition offers a platform for innovation and technical skills to be recognized and rewarded.    </Text>
                </div></div>
              

<div style={{ display: 'flex', flexWrap: 'nowrap', margin: '20px' }}>
  <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '50px', height: '100px' }}
                            objectFit='cover'
                            src={SPIT_Prinkal}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Prinkal Doshi</Heading>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                <CardBody>
                        <Image
                            boxSize={{ width: '50px', height: '100px' }}
                            objectFit='cover'
                            src={SPIT_Tanay}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Tanay Desai</Heading>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={SPIT_Arsh}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Arshkumar Sakaria</Heading>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='sm' style={{ margin: '10px', width: '25%' }}>
                    <CardBody>
                        <Image
                            boxSize={{ width: '200px', height: '100px' }}
                            objectFit='cover'
                            src={SPIT_Mihir}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading style={{ textAlign: 'center' }} size='sm'>Mihir Panchal</Heading>
                        </Stack>
                    </CardBody>
                </Card>

            </div>

            
        </>
    );
};

export default Gallery;
