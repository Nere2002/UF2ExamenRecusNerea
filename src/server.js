const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const router = express.Router();

// Importar archivo de configuración de la base de datos
const { crearConfigBaseDades } = require("./app/db.config.js");
const db = crearConfigBaseDades(); // CONEXIÓN A LA BD
const {initModels} = require("../models/init-models.js");
// Importar modelos
const models = initModels(db);

app.use(cors());
app.use(express.json());

// EXERCICI 1 -------------------------------------------------

router.get('/professors', (req, res) => {
  const deptNom = 'INFORMATICA I MATEMATICA APLICADA';

  const sql = `
    SELECT prof_dni, prof_nom, prof_cognom_1, prof_cognom_2, prof_telefon
    FROM professor
           LEFT JOIN departament ON professor.prof_dept_codi = departament.dept_codi
    WHERE departament.dept_nom <> '${deptNom}'
       OR departament.dept_nom IS NULL;
  `;

  db.query(sql, [deptNom], (err, results) => {
    if (err) {
      console.error('Error al obtener los profesores: ', err);
      res.status(500).json({ error: 'Error al obtener los profesores' });
      return;
    }
    res.json(results);
  });
});

// EXERCICI 2 -------------------------------------------------



function addAlumnVirgenField() {
  const sql = `
    ALTER TABLE alumnes
    ADD COLUMN ALUMN_VIRGEN INT NOT NULL DEFAULT 0;
  `;

  return new Promise((resolve, reject) => {
    db.query(sql, (error, results) => {
      if (error) {
        reject(new Error('Maria, maria'));
      } else {
        resolve();
      }
    });
  });
}

app.get('/virgenSanta', (req, res) => {
  addAlumnVirgenField()
    .then(() => {
      res.send('El campo ALUMN_VIRGEN se ha agregado correctamente.');
    })
    .catch((error) => {
      res.status(500).send('Error al agregar el campo ALUMN_VIRGEN: ' + error.message);
    });
});

// EXERCICI 3 ---------------------------------------------------------------

app.get('/nota10', async (req, res) => {
  try {
    const notaObtinguda = 10;

    const alumnes = await models.alumnes.findAll({
      include: [
        {
          model: models.matricula,
          include: [
            {
              model: models.assignatures,
              where: {
                MATR_NOTA: notaObtinguda,
              },
              required: true,
            },
          ],
        },
      ],
    });

    res.json(alumnes);
  } catch (error) {
    console.error('Error al obtener los alumnos con nota 10: ', error);
    res.status(500).json({ error: 'Error al obtener los alumnos con nota 10' });
  }
});


// EXERCICI 4 ------------------------------------------------------------------

app.delete('/api/borrarcamp', async (req, res) => {
  try {
    await models.professor.update({ PROF_CASAT: null });

    console.log('Campo "PROF_CASAT" de la tabla professor eliminado con éxito');
    res.json({ mensaje: 'Campo "PROF_CASAT" eliminado correctamente en todos los registros' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el campo "PROF_CASAT"' });
  }
});









// Configurar las rutas
app.use('/api', router);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
