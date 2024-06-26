import path from "path";

const settings = {
	token: {
		secret: "ts$s38*jsjmjnT1",
		expires: "1d", // expires in 24 hours
		noexpires: "100y", // expires in 100 years
	},
	crypto: {
		saltRounds: 12,
		key: "4A614E645267556B",
	},
	baseUrl: process.env.BASE_URL || "http://localhost",
	uploadDir: process.env.UPLOAD_DIR || "/tmp",
	files: {
		path: process.env.IMAGES_DIR || "../adm/files",
	},
	// imagesDir  : process.env.IMAGES_DIR || '../adm/files/',
	url: function () {
		return this.baseUrl + ":" + this.port;
	},
	path: path.normalize(path.join(__dirname, "..")),
	port: process.env.NODE_PORT || 80,
	portHttps: process.env.NODE_PORT_HTTPS || 443,
	portSIO: process.env.NODE_PORT_SIO || 10111,
	database: {
		logging: "console.log",
		timezone: "-03:00",
		host: "localhost:27017",
		name: "mercadogamer",
		itemsPerPage: 24,
	},
	mp: {
		env: "prod", //dev
		prod: {
			accessToken:
				"APP_USR-1805524568759154-092115-4801c039468cfe45d81add4bb59eeff8-811907353",
		},
		dev: {
			accessToken:
				"TEST-1805524568759154-092115-ce28899d0ecb8359f22119144f1600ca-811907353",
		},
		success_back_url: "https://www.mercadogamer.com/purchase",
		url: "https://api.mercadopago.com/v1",
		urlIpn: "https://www.mercadogamer.com/api/mp/ipnv2",
	},
	invoiceIsProduction: true,
	businessRules: {},
	nodemailer: {
		transporter: {
			host: "email-smtp.us-east-2.amazonaws.com",
			secureConnection: true,
			port: 465,
			auth: {
				user: "AKIAYCNWODUNYB6RF7VS",
				pass: "BObn+SxfJVuEyuhgCYq/66+YQBNgf6R1fai56/8bZuqt",
			},
		},
		mailOptions: {
			from: "no-reply@mercadogamer.com",
			subject: "Mercado Gamer: Recuperacion de contraseña",
		},
	},
	twoFactor: {
		verifyToken: "XDQXYCP5AC6FA32FQXDGJSPBIDYNKK5W",
	},
	awsSms: {
		AWS_ASSESS_KEY_ID: "",
		AWS_SECRET_ASSESS_KEY_ID: "",
		AWS_REGION: "us-east-2",
	},
};

module.exports = settings;
