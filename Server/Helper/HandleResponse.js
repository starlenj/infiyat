module.exports = {
  HandleResponse: async (req, res, message, data = []) => {
    try {
      if (data.length === 0) {
        res.status(200).json({ status: 200, success: true, message });
      } else {
        res.status(200).json({ status: 200, success: true, data, message });
      }
    } catch (e) {
      res.status(500).json({ status: 500, success: false, message: e });
    }
  },

  HandleError: async (req, res, message) => {
    try {
      res.status(500).json({ status: 500, success: false, message });
    } catch (e) {
      res.status(500).json({ status: 500, success: false, message: e });
    }
  },
};
