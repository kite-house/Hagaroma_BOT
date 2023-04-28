import yadisk
import os
from dotenv import load_dotenv, find_dotenv
from datetime import datetime

load_dotenv(find_dotenv())

disk = yadisk.YaDisk(token=os.getenv('SECRET_TOKEN_YADISK'))

FILENAME = f'RESERVE: {datetime.now().replace(microsecond=0)}'

disk.mkdir(f'/SAVE_RESERVING_COPIES/{FILENAME}/')

disk.upload('Rezerving_copies/pattern.json', f'/SAVE_RESERVING_COPIES/{FILENAME}/pattern.json')

disk.upload('Rezerving_copies/HAGAROMA-BOT.sql', f'/SAVE_RESERVING_COPIES/{FILENAME}/HAGAROMA-BOT.sql')
