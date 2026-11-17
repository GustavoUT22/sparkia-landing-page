import type { CourseId } from "@/content/courses";

export function HeroIllustration() {
  return (
    <div className="hero-art" role="img" aria-label="Ilustración de una pantalla creando un videojuego">
      <div className="float-code code-a" aria-hidden="true">
        &lt;/&gt;
      </div>
      <div className="float-code code-b" aria-hidden="true">
        {"{ }"}
      </div>
      <div className="art-window" aria-hidden="true">
        <div className="window-top">
          <i />
          <i />
          <i />
          <span>mi-primer-juego</span>
        </div>
        <div className="game-canvas">
          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="pixel-star">+</div>
          <div className="pixel-character">
            <span className="eye left" />
            <span className="eye right" />
          </div>
          <div className="ground">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="score">VIDAS ♥ ♥ ♥</div>
        </div>
        <div className="code-stack">
          <span className="block yellow">al presionar bandera</span>
          <span className="block violet">mover 10 pasos</span>
          <span className="block cyan">sumar 1 punto</span>
        </div>
      </div>
      <div className="cursor-card" aria-hidden="true">
        <span className="cursor">↖</span>
        <b>¡Funciona!</b>
      </div>
    </div>
  );
}

export function ProgramArt({ type, symbol }: { type: CourseId; symbol: string }) {
  return (
    <div className={`program-art ${type}`} aria-hidden="true">
      <span className="program-symbol">{symbol}</span>
      <span className="program-pixel p1" />
      <span className="program-pixel p2" />
      <span className="program-pixel p3" />
    </div>
  );
}

function KidsVisual() {
  return (
    <div className="course-visual kids-visual" data-reveal aria-hidden="true">
      <span className="visual-label">PROYECTO FINAL</span>
      <div className="scratch-card">
        <div className="scratch-screen">
          <span className="sun" />
          <span className="scratch-cat">
            ▲<b>•ᴗ•</b>▲
          </span>
          <span className="coin">★</span>
          <span className="coin second">★</span>
          <span className="lives">♥ ♥ ♥</span>
        </div>
        <div className="scratch-blocks">
          <i>al iniciar</i>
          <i>si toca moneda</i>
          <i>sumar punto</i>
        </div>
      </div>
      <span className="doodle d1">✦</span>
      <span className="doodle d2">{"{ }"}</span>
    </div>
  );
}

function TeensVisual() {
  return (
    <div className="course-visual teens-visual" data-reveal aria-hidden="true">
      <div className="rpg-window">
        <div className="rpg-bar">
          <span>mini_rpg.py</span>
          <span>— □ ×</span>
        </div>
        <div className="rpg-code">
          <p>
            <b>player</b> = <i>&quot;Luna&quot;</i>
          </p>
          <p>
            <em>if</em> key_found:
          </p>
          <p className="indent">open_castle()</p>
        </div>
        <div className="rpg-map">
          <span className="pixel-hero">♟</span>
          <span className="pixel-key">◆</span>
          <span className="pixel-tree t1">♠</span>
          <span className="pixel-tree t2">♠</span>
          <span className="pixel-tree t3">♠</span>
        </div>
      </div>
      <span className="game-chip">PY</span>
      <span className="crosshair">+</span>
    </div>
  );
}

function UniVisual() {
  return (
    <div className="course-visual uni-visual" data-reveal aria-hidden="true">
      <div className="terminal">
        <div className="terminal-head">
          <span />
          <span />
          <span />
        </div>
        <p>
          <i>01</i> function resolver(reto) {"{"}
        </p>
        <p>
          <i>02</i>&nbsp;&nbsp; const pasos = analizar(reto);
        </p>
        <p>
          <i>03</i>&nbsp;&nbsp; return practicar(pasos);
        </p>
        <p>
          <i>04</i> {"}"}
        </p>
        <div className="terminal-result">✓ Compilado correctamente</div>
      </div>
    </div>
  );
}

export function CourseVisual({ id }: { id: CourseId }) {
  if (id === "kids") return <KidsVisual />;
  if (id === "teens") return <TeensVisual />;
  return <UniVisual />;
}
