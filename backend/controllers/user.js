const logger = require("../logger");
const user = require("../models/user");

exports.postUser = async (req, res, next) => {
  try {
    logger.debug(
      `Entering the post User controller function with data`
    );
    const {
      avatar,
      fName,
      lName,
      company,
      contactPhone,
      companySite,
      allowMarketing,
      timeZone,
      country,
      language,
      communications,
      currency,
      payment,
      lastUpdated,
    } = req.body.data;

    const usr = await user.findByPk(1);

    if (usr) {
      let changes = "";
      for (key in req.body.data) {
        if (
          usr[key] !== req.body.data[key] &&
          key !== "lastUpdated" &&
          key !== "createdAt" &&
          key !== "communications" &&
          key !== "utcString"
        ) {
          if (changes.length > 0) {
            changes += `, ${key + " to " + req.body.data[key] + " "}`;
          } else {
            changes += `${key + " to " + req.body.data[key]}`;
          }
        }
      }
      const updated = await usr.update({
        avatar,
        fName,
        lName,
        company,
        contactPhone,
        companySite,
        allowMarketing,
        timeZone,
        country,
        utcString: lastUpdated,
        language,
        communications,
        currency,
        payment,
        lastUpdated,
      });
      if (changes !== "")
        logger.info(`${fName + " " + lName} has updated his ${changes}`);
      return res
        .status(200)
        .json({ message: "success", createdAt: updated.createdAt });
    } else {
      const newUser = await user.create({
        avatar,
        fName,
        lName,
        company,
        contactPhone,
        companySite,
        allowMarketing,
        timeZone,
        country,
        utcString: lastUpdated,
        language,
        communications,
        currency,
        payment,
        lastUpdated,
      });
      logger.info(`${fName + " " + lName} Profile has been Created`);
      logger.info(`${fName + " " + lName} Exited the postUser controller function   `);
      return res
        .status(200)
        .json({ message: "success", createdAt: newUser.createdAt });
    }
  } catch (err) {
    logger.error(`Error: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    logger.info("executing the getUser Controller function")
    const User = await user.findByPk(1);
    if (User) {
      let data = {
        avatar: User.avatar,
        fName: User.fName,
        lName: User.lName,
        company: User.company,
        contactPhone: User.contactPhone,
        companySite: User.companySite,
        allowMarketing: User.allowMarketing,
        country: User.country,
        utcString: User.utcString,
        language: User.language,
        communications: User.communications,
        timeZone: User.timeZone,
        currency: User.currency,
        lastUpdated: User.lastUpdated,
        payment: User.payment,
        createdAt: User.createdAt,
      };
      logger.info(`${User.fName + " " + User.lName} user has been found and details have been sent !! Exiting the get user controller function`);
      return res.status(200).json({ data });
    } else {
        logger.info(`no user has been found !! Exiting the get user controller function`);
      return res.status(200).json({ message: "no users" });
    }
  } catch (e) {
    logger.error(`Error: ${e.message}`);
    return res.status(500).json({ message: e.message });
  }
};
