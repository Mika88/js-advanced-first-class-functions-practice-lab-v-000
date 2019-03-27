// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
  console.log(driver.name);
});
}

function logDriversByHometown(drivers, location) {
  const callback = function (driver) {
    if (driver.hometown === location)
      console.log(driver.name);
  }

  drivers.forEach(callback);
}

function driversByRevenue(drivers) {
  const newDrivers = drivers
  return newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};
