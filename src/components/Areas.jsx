import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Accidentes laborales',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Determinamos tu incapacidad y te ayudamos a recibir la indemnización que te merecés.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      './accidenteDeTrabajo.jpeg',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Seguros',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Asesoramiento, representación y defensa en caso de siniestros, tanto en la etapa de la mediación previa, como en la etapa judicial.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      './seguros.jpg',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Laboral',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Asesoramos al trabajador en los reclamos de sus derechos laborales para obtener lo que por ley le corresponde.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      './agotamiento.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Accidentes de tránsito',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Realizamos el reclamo ante la compañía de seguros para conseguirte la mejor indemnización.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      './accidentes.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Daños y perjuicios',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Reclamamos tu compensación ante casos de mala praxis médica.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      './marti.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Jubilaciones',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Realizamos pensiones y jubilaciones en tiempo récord y con el mejor haber.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      './jub.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Areas() {
  return (
    <div id='areas' className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ onde: true, amount: 0 }}
            transition={{ delay: 0, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl font-bold font-mont tracking-tight text-gray-700 p-4 lg:text-6xl">ÁREAS DE PRÁCTICAS
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ onde: true, amount: 0 }}
            transition={{ delay: 1, duration: 2 }}
            variants={{
              hidden: { opacity: 0, z: 50 },
              visible: { opacity: 1, z: 0 },
            }}
            className="mx-auto mt-3 max-w-2xl font-mont text-xl font-midium text-gray-500 sm:mt-4">
            Estoy para asesorarte en mis áreas de especialidad.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ onde: true, amount: 0 }}
          transition={{ delay: .5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover transition-transform duration-500 transform-gpu group-hover:scale-125 hover:scale-110 rotate-0 hover:rotate-2" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-xl font-mont font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base font-mont text-gray-500">{post.description}</p>                 
                </div>
                <div className="mt-6 flex items-center">
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}