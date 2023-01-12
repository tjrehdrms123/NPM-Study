const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');

const { combine, timestamp, printf, errors, prettyPrint, colorize, simple } = winston.format;

// 로그 파일에 쓰여질 로그 형식
const logFormater = printf(info => `${info.timestamp} ${info.level}: ${info.message} ${info.stack || ''}`)
const logger = winston.createLogger({
    format: combine(
        errors({ stack: true }),
        colorize(),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss', // 아래 info.timestamp 변수에서 사용됨
        }),
        prettyPrint(),
        logFormater,
    ),
    transports: [
        new winstonDaily({
            datePattern: 'YYYY-MM-DD', // 아래 %DATE% 변수에서 사용될 형식
            dirname: 'logs',  // 해당 디렉토리 하위에 로그 파일 저장
            filename: `%DATE%.log`, // 로그 파일 이름
            maxFiles: 2, // 로그 파일 저장 일치
            zippedArchive: true, // 전날 만든 파일을 zip으로 압축할지 여부
        }),
    ],
});

logger.add(new winston.transports.Console({
    format: combine(
        simple(),  // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
        logFormater,
    )
}));

logger.warn('hi');