import { motion, Variants } from "framer-motion";
import { Box, Stack, Container, Heading } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiNextdotjs,
  SiFramer,
  SiJavascript,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";

const iconProps = {
  size: "50px",
  marginLeft: "0px",
};

const Frame = ({ children, name }) => {
  return (
    <Box>
      <Container
        border='2px'
        borderColor='white'
        pr='0px'
        pl='0px'
        pt='10px'
        justifyContent='center'
        h='110px'
        w='110px'
        bg='brand.prettiPurple'
      >
        <Box
          justifyContent='center'
          justifyItems='center'
          textAlign='center'
          display='flex'
          m='auto'
        >
          {children}
        </Box>
        <Heading mt='10px' textAlign='center' fontSize='19px'>
          {name}
        </Heading>
      </Container>
    </Box>
  );
};

const Section = ({ children, delay = 0 }) => (
  <Box m='auto' justifyContent='center'>
    <Stack
      mb={10}
      ml='0'
      spacing={6}
      direction={"row"}
      display={"flex"}
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      <motion.div
        initial={{ y: 0, x: -100, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='HTML'>
          <AiFillHtml5 {...iconProps} />
        </Frame>
      </motion.div>

      <motion.div
        initial={{ y: 0, x: -50, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='Next.js'>
          <SiNextdotjs {...iconProps} />
        </Frame>
      </motion.div>

      <motion.div
        initial={{ y: -50, x: 0, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='React'>
          <FaReact {...iconProps} />
        </Frame>
      </motion.div>
      <motion.div
        initial={{ y: 0, x: 200, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='Node.js'>
          <FaNodeJs {...iconProps} />
        </Frame>
      </motion.div>
      <motion.div
        initial={{ y: 0, x: 150, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='JavaScript'>
          <SiJavascript {...iconProps} />
        </Frame>
      </motion.div>
    </Stack>
    <Stack
      mb={10}
      ml='0'
      spacing={6}
      direction={"row"}
      display={"flex"}
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      <motion.div
        initial={{ y: 0, x: -200, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='CSS'>
          <SiCss3 {...iconProps} />
        </Frame>
      </motion.div>
      <motion.div
        initial={{ y: 0, x: -150, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='Framer'>
          <SiFramer {...iconProps} />
        </Frame>
      </motion.div>
      <motion.div
        initial={{ y: 50, x: 0, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='Github'>
          <BsGithub {...iconProps} />
        </Frame>
      </motion.div>
      <motion.div
        initial={{ y: 0, x: 200, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='PowerShell'>
          <VscTerminalPowershell {...iconProps} />
        </Frame>
      </motion.div>
      <motion.div
        initial={{ y: 0, x: 150, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1.5, delay }}
      >
        <Frame name='VS Code'>
          <SiVisualstudiocode {...iconProps} />
        </Frame>
      </motion.div>
    </Stack>
  </Box>
);

export default Section;
