import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('productor')
export class productorEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'bigint', nullable: true })
  cnpj: number | undefined;

  @Column({ type: 'bigint', nullable: true})
  cpf: number | undefined;

  @Column({ type: 'varchar'})
  produtorNome: string | undefined;

  @Column({ type: 'varchar'})
  fazendaNome: string | undefined;
  
  @Column({ type: 'varchar'})
  cidade: string | undefined;

  @Column({ type: 'varchar'})
  estado: string | undefined;

  @Column({ type: 'integer'})
  totalHecFazenda: number | undefined;

  @Column({ type: 'integer'})
  totalHecUtilizada: number | undefined;

  @Column({ type: 'integer'})
  totalHecVegetacao: number | undefined;

  @Column({ type: 'simple-array' })
  tipoPlantio!: string[];
}
