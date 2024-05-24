import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">ElectroShop</Heading>
        <Flex>
          <Button as={Link} to="/" variant="link" color="white" mr={4}>Home</Button>
          <Button as={Link} to="/products" variant="link" color="white" mr={4}>Products</Button>
          <Button as={Link} to="/about" variant="link" color="white" mr={4}>About Us</Button>
          <Button as={Link} to="/contact" variant="link" color="white">Contact</Button>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" position="relative" height="60vh" width="100%" overflow="hidden">
        <Image src="/images/hero-banner.jpg" alt="Hero Banner" objectFit="cover" width="100%" height="100%" />
        <Flex position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" justifyContent="center" alignItems="center">
          <VStack spacing={4} color="white" textAlign="center">
            <Heading as="h2" size="2xl">Welcome to ElectroShop</Heading>
            <Text fontSize="lg">Your one-stop shop for all things electronics</Text>
            <Button colorScheme="teal" size="lg">Shop Now</Button>
          </VStack>
        </Flex>
      </Box>

      {/* Featured Products Section */}
      <Box as="section" py={10}>
        <Heading as="h3" size="lg" textAlign="center" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>High-quality electronic item</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Top-notch electronic gadget</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Latest electronic device</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={6}>
        <Flex justifyContent="space-between" alignItems="center" px={10}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Flex>
            <Button as="a" href="https://facebook.com" variant="link" color="white" mr={4}><FaFacebook size="24px" /></Button>
            <Button as="a" href="https://twitter.com" variant="link" color="white" mr={4}><FaTwitter size="24px" /></Button>
            <Button as="a" href="https://instagram.com" variant="link" color="white"><FaInstagram size="24px" /></Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;