const axios = require("axios");
const datefns = require("date-fns");

const apiUrl = "http://localhost:3000/api/v1";
const userId = 1;
const days = 200;
const { habits } = require("./mockData");
const habitsIdsAndDays = [];

async function seedDatabase() {
  for (let habit of habits) {
    try {
      const response = await axios.post(`${apiUrl}/habits`, habit);
      console.log(`Created entity with ID: ${response.data.result[0].id}`);
      habitsIdsAndDays.push({
        id: response.data.result[0].id,
        days: response.data.result[0].weekDays,
      });
    } catch (error) {
      console.error(`Error creating entity: ${error.message}`);
    }
  }
  console.log("All habits created");
  for (let i = 0; i < days; i++) {
    const today = new Date();
    const date = datefns.subDays(today, days - i);
    for (let habit of habitsIdsAndDays) {
      const dateDayNumber = ((Number(datefns.getDay(date)) + 6) % 7) + 1;
      if (habit.days.includes(dateDayNumber)) {
        const randomval = Math.random() * days < i ? 1 : 0;
        const habitRegistry = {
          date: datefns.format(date, "MM-dd-yyyy"),
          value: randomval,
          habitId: habit.id,
        };
        console.log(
          `creating registry for habit: ${
            habit.id
          } (${randomval}) Date:${datefns.format(date, "MM-dd-yyyy")}`
        );
        await axios.post(`${apiUrl}/habitRegistries`, habitRegistry);
      }
    }
    const randomVal = Math.abs(i / 200 + 0.3 * Math.random());
    const dayMoodRegistry = {
      date: datefns.format(date, "MM-dd-yyyy"),
      userId: userId,
      value: randomVal > 1 ? 1 : randomVal,
    };
    console.log(
      `creating mood registry for user: ${userId} (${randomVal}) Date:${datefns.format(
        date,
        "MM-dd-yyyy"
      )}`
    );
    await axios.post(`${apiUrl}/dayMoodRegistries`, dayMoodRegistry);
  }
  console.log("DATA MOCKED");
}

try {
  seedDatabase();
} catch (error) {
  console.error("ERROR");
}
