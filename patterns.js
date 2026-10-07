window.PATTERNS = [
  {
    id: "urgency",
    label: "Pressure to act fast",
    explanation: "The message pushes you to act quickly or threatens a consequence if you wait.",
    weight: 3,
    regex: /(act now|within 24 hours|final notice|account suspended|urgent action|immediate response|today only)/i
  },
  {
    id: "payment-methods",
    label: "Unusual payment method",
    explanation: "The sender asks for payment in a way that is hard to trace or easy to steal.",
    weight: 3,
    regex: /(gift card|gift cards|wire transfer|bitcoin|crypto|cash app|zelle|venmo|western union|money gram|pay with.*(gift card|bitcoin|crypto|cash app|zelle))/i
  },
  {
    id: "codes",
    label: "Request for codes or passwords",
    explanation: "The sender asks for a password, PIN, one-time code, or secret access information.",
    weight: 3,
    regex: /(secret code|one[- ]time code|verification code|otp|passcode|password|pin number|your pin|security code|bank password)/i
  },
  {
    id: "ssn-bank-details",
    label: "Request for private details",
    explanation: "The message asks for financial or personal information that a real company would not request in a message.",
    weight: 3,
    regex: /(social security number|ssn|bank account|routing number|full card number|account number|bank details|routing and account)/i
  },
  {
    id: "government-claim",
    label: "Claim to be from a government agency",
    explanation: "The message claims to be from a government office or a public agency, which is common in scams.",
    weight: 3,
    regex: /(irs|internal revenue service|social security administration|medicare|government agency|police department|fbi|department of justice|state tax office)/i
  },
  {
    id: "prize",
    label: "Prize or inheritance claim",
    explanation: "The message says you won a prize, lottery, sweepstakes, or inheritance.",
    weight: 3,
    regex: /(you won|lottery|inheritance|winner|prize|sweepstakes|cash award|claim your prize)/i
  },
  {
    id: "package-delivery",
    label: "Package delivery problem",
    explanation: "The message says a package is delayed and gives a link to fix it.",
    weight: 3,
    regex: /(package.*(delivery|shipment)|delivery.*(problem|issue)|tracking.*(link|update)|parcel.*(held|pending)|package.*(link|tracking))/i
  },
  {
    id: "account-lock",
    label: "Account lock or login alert",
    explanation: "The message claims your account is locked or there is unusual login activity and asks you to click a link.",
    weight: 3,
    regex: /(account.*(locked|suspended)|unusual login|login activity|security alert|verify.*account|your account.*(limited|restricted))/i
  },
  {
    id: "family-money",
    label: "Family member in trouble",
    explanation: "The message says someone you know is in trouble and needs money right away.",
    weight: 3,
    regex: /(mom|dad|sister|brother|family member|emergency|need money|send money right away|in trouble|hospitalized|car accident)/i
  },
  {
    id: "keep-secret",
    label: "Keep it secret",
    explanation: "The sender tells you not to tell anyone else about the request.",
    weight: 2,
    regex: /(don't tell anyone|keep this private|between us|do not share|secretly|keep it confidential)/i
  },
  {
    id: "move-chat",
    label: "Move to another app",
    explanation: "The sender wants to move the conversation off the normal platform and away from a record.",
    weight: 2,
    regex: /(move this to whatsapp|use whatsapp|switch to telegram|text me|dm me|move to signal|go to telegram|continue on whatsapp)/i
  },
  {
    id: "job-offer",
    label: "Too-good-to-be-true job offer",
    explanation: "The message offers easy money or a work-from-home job with no real qualifications.",
    weight: 2,
    regex: /(easy money|work from home|no experience needed|paid weekly|remote job|make money fast|simple online job|quick cash)/i
  },
  {
    id: "short-link",
    label: "Shortened or suspicious link",
    explanation: "The message includes a shortened link or other suspicious web address.",
    weight: 2,
    regex: /(bit\.ly|tinyurl|ow\.ly|is\.gd|goo\.gl|t\.co|shorturl|tinyurl\.com|bitly\.com|click here.*https?:|https?:\/\/[^\s]*\.(?:link|xyz|top|club|info|click|ru))/i
  },
  {
    id: "overpayment",
    label: "Overpayment check scam",
    explanation: "The message asks you to accept an overpayment and send back the difference.",
    weight: 3,
    regex: /(overpaid|send back the difference|extra payment|check was sent|refund the difference|payment mistake|deposit.*check)/i
  }
];
