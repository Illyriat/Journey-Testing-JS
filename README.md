# Traveller

[![My Skills](https://skillicons.dev/icons?i=js,npm)](https://skillicons.dev)

Traveller is a Node.js project that includes a test setup using Mocha. This project is designed for testing and runs using predefined test cases.

## Installation
To install the dependencies, run:

```npm install```

# Running Tests

This project uses Mocha for testing. Test files should be located in the specs/ directory.

To run the tests, use:

```npm test```

# Example Output

Running npm test produces the following output:

```
> traveller@1.0.0 test
> mocha specs

  Journey
    ✔ should have a start location
    ✔ should have an end location
    ✔ should have a mode of transport
    ✔ should have a distance

  Traveller
    ✔ should have a collection of journeys
    ✔ should be able to get the journeys start locations
    ✔ should be able to get the journeys end locations
    ✔ should be able to get journeys by transport
    ✔ should be able to get journeys over a certain distance
    ✔ should be able to calculate total distance travelled
    ✔ should be able to get a unique list of the modes of transport

  11 passing (12ms)
  ```  