import Appointment from '../models/Appointment';
import { EntityRepository, Repository, Entity } from 'typeorm'


class AppointmentRepository extends Repository<Appointment>{
  @EntityRepository(Appointment)
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentRepository;
