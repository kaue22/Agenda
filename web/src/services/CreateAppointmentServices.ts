import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appoinmentRepository = getCustomRepository(AppointmentsRepository);

    const appoitmentDate = startOfHour(date);

    const findAppointmentInSameDate = appoinmentRepository.findByDate(
      appoitmentDate,
    );
    if (findAppointmentInSameDate) {
      throw Error("This Appointment Bokked");
    }

    const appointment = appoinmentRepository.create({
      provider,
      date: appoitmentDate,
    });

    await AppointmentsRepository.save(appointment);
    return appointment;
  }

}
export default CreateAppointmentService;
