<div class="sb-banner" style="background-image:linear-gradient(125deg,#16285c 0%,#0a1330 60%,#0a1736 100%)">
  <div class="sb-banner__inner">
    <p class="sb-eyebrow">Getting started · out now</p>
    <h1>Install the modpack</h1>
  </div>
</div>

The easiest way in is the **Realm Gates Installer** — a small desktop app that sets everything up for
you: it installs **Forge 1.20.1**, downloads the modpack, and creates a ready-to-play profile.
**Java is bundled in**, so there's nothing else to install.

<div class="sb-cards">
  <a class="sb-card" href="https://github.com/Otogr28/MCserver/releases/latest" target="_blank" rel="noopener">
    <span class="sb-card__icon sb-ico-install"></span>
    <h3>⬇ Download the installer</h3>
    <span>Grab the latest release for your system from GitHub, open it, and click <strong>Install</strong>. That's it.</span>
  </a>
</div>

<p class="sb-eyebrow">Pick your system</p>

<div class="md-typeset"><table>
<thead><tr><th>System</th><th>Download</th><th>First launch</th></tr></thead>
<tbody>
<tr>
  <td><strong>Windows</strong></td>
  <td><a href="https://github.com/Otogr28/MCserver/releases/download/installer-v1.0.0/Realm.Gates.Installer-1.0.0.exe">.exe</a> · <a href="https://github.com/Otogr28/MCserver/releases/download/installer-v1.0.0/Realm.Gates.Installer-1.0.0.msi">.msi</a> · <a href="https://github.com/Otogr28/MCserver/releases/download/installer-v1.0.0/RealmGatesInstaller-windows-1.0.0.zip">portable .zip</a></td>
  <td>If SmartScreen warns: <em>More info → Run anyway</em>.</td>
</tr>
<tr>
  <td><strong>macOS</strong></td>
  <td><a href="https://github.com/Otogr28/MCserver/releases/download/installer-v1.0.0/Realm.Gates.Installer-1.0.0.dmg">.dmg</a></td>
  <td>Right-click the app → <em>Open → Open anyway</em> (it's unsigned).</td>
</tr>
<tr>
  <td><strong>Linux</strong></td>
  <td><a href="https://github.com/Otogr28/MCserver/releases/download/installer-v1.0.0/realm-gates-installer_1.0.0-1_amd64.deb">.deb</a> · <a href="https://github.com/Otogr28/MCserver/releases/download/installer-v1.0.0/RealmGatesInstaller-linux-1.0.0.tar.gz">.tar.gz</a></td>
  <td>Install the <code>.deb</code>, or unpack the tarball and run <code>bin/Realm Gates Installer</code>.</td>
</tr>
</tbody></table></div>

<p class="mod-hero-note">All downloads come from the official release: <a href="https://github.com/Otogr28/MCserver/releases/tag/installer-v1.0.0">Otogr28/MCserver · installer-v1.0.0</a>.</p>

## How the installer works

1. **Download &amp; open** the app for your system (above).
2. Click **Install** — it sets up **Forge 1.20.1**, downloads the modpack, and creates a launch
   profile (it can even tune the shaders to your hardware).
3. **Launch Minecraft**, pick the **Forge 1.20.1 / Realm Gates** profile, and connect to the server.
4. **Updating later?** Open the installer again and hit **Update** — it re-syncs the mods and configs
   to match the server. See [Updating](updating.md) for what's kept vs. reset.

!!! info "Before you connect"
    - You need **Minecraft: Java Edition** (the installer takes care of Forge and the mods).
    - Get the **server address** from the admin, and ask them to **whitelist your exact in-game
      name** (it's **case-sensitive** — see [Server info](../server-info.md)).

---

## Prefer to set it up by hand?

You don't have to use the app. The modpack lives on GitHub at
**[`Otogr28/MCserver`](https://github.com/Otogr28/MCserver)** — install **Forge 1.20.1** yourself,
then add the modpack's `mods` and `config` folders to that instance. Pick whichever method suits you.

### Option A — One script (auto-install + auto-update)

A single command installs Git (if needed) and downloads the modpack into a folder. You then point
your Forge 1.20.1 instance **at that folder**.

Open **PowerShell** on Windows and paste:

```powershell
iwr -useb https://raw.githubusercontent.com/Otogr28/MCserver/master/install.ps1 | iex
```

This creates the modpack folder (default `C:\Users\YOU\summerBuddies`). In your launcher, set that
folder as the instance's **game directory** and launch from there. To update later, **double-click
`sync.bat`** inside the folder — it force-updates everything to match the server.

### Option B — Download a ZIP (no tools)

1. On the [GitHub page](https://github.com/Otogr28/MCserver), click the green **`<> Code`** button → **Download ZIP**.
2. Unzip it.
3. Copy the **`mods`** and **`config`** folders into your Forge 1.20.1 instance.
4. When something changes, download the ZIP again and re-copy.

### Option C — Git (graphical, easy updates)

1. Install **[Git for Windows](https://gitforwindows.org)** (keep clicking **Next → Install**).
2. **Git GUI → Clone Existing Repository** — Source `https://github.com/Otogr28/MCserver.git`, Target an empty folder.
3. Copy the **`mods`** and **`config`** folders into your Forge 1.20.1 instance.
4. To update: **Remote → Fetch → origin**, **Merge → Local Merge → origin/master**, then re-copy (or just run `git pull`).

---

## Next steps

- Set up your language and microphone: **[Voice &amp; chat translation](voice-and-chat.md)**.
- Understand what gets reset on updates: **[Updating](updating.md)**.
- Curious what a mod does? Browse **[the mods](../mods/index.md)**.
