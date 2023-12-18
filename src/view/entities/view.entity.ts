import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Blog } from '../../blog/entities/blog.entity';

@Entity()
export class View {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @ManyToOne(() => Blog, (blog) => blog.likes)
  blog: Blog;
}
